const axios = require("axios")
const { model } = require("mongoose")
const Expense = require("../models/expenseModel")

const getAIResponse = async (req,res)=>{
const {prompt} = req.body 

if(!prompt){
    return res.status(400).json({
        message:"Prompt is required"
    })
}

const expenses = await Expense.find({userID:req.user.id})

let totalExpense = 0
let totalIncome = 0

const expenseCategoryTotal = {}
const incomeCategoryTotal = {}

expenses.forEach((item)=>{

    if(item.type === "Expense"){
        totalExpense += Number(item.amount)
        if(expenseCategoryTotal[item.category]){
            expenseCategoryTotal[item.category] += Number(item.amount)
        }else{
            expenseCategoryTotal[item.category] = Number(item.amount)
        }
    }

    if(item.type === "Income"){
        totalIncome += Number(item.amount)
        if(incomeCategoryTotal[item.category]){
            incomeCategoryTotal[item.category] += Number(item.amount)
        }else{
            incomeCategoryTotal[item.category] = Number(item.amount)
        }
    }
})

let topExpenseCategory = ""
let maxExpenseAmount = 0

for(const category in expenseCategoryTotal){
    if(expenseCategoryTotal[category]>maxExpenseAmount){
        topExpenseCategory = category
        maxExpenseAmount = expenseCategoryTotal[category]
    }
}

let topIncomeCategory = ""
let maxIncomeAmount = 0

for(const category in incomeCategoryTotal){
    if(incomeCategoryTotal[category]>maxIncomeAmount){
        topIncomeCategory = category
        maxIncomeAmount = incomeCategoryTotal[category]
    }
}

const aiPrompt = `You are a smart financial assistant. Here is the users financial data:Total Expense : ${totalExpense} , Total Income :${totalIncome} ,Expense category Totals:${JSON.stringify(expenseCategoryTotal)},Income category Totals:${JSON.stringify(incomeCategoryTotal)} ,Category most money spent on :${topExpenseCategory},Highest Expense amount on the top category :${maxExpenseAmount},,Category most money Got From (Highest Income Source) on :${topIncomeCategory},Highest Income amount on the top category :${maxIncomeAmount},Transactions :${JSON.stringify(expenses)},Answer the following user quetsion based ONLY on this financial data of the user dont write "Based on the given data and all.instead you can say according to your transactions (everytime different like this).User Question :${prompt}`

const response = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
        model:"openai/gpt-3.5-turbo",
        messages:[
            {
                role:"user",
                content:aiPrompt
            }
        ]
    },
    {
        headers:{
            Authorization:`Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type":"application/json"
        }
    }
)

res.json({response:response.data.choices[0].message.content})
}

module.exports = getAIResponse