const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

console.log(process.env.GEMINI_API_KEY);
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Single model configuration
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});

const generatePrompt = async (prompt, projectId) => {
    try {
        const result = await model.generateContent(prompt);
        const response = result.response.candidates[0].content.parts[0].text;
        console.log(result.response.candidates[0].content.parts[0]);

        return response;
    } catch (error) {
        console.error("AI Generation Error:", error);
        throw new Error(error.message);
    }
};

module.exports = {
    generatePrompt,
};
