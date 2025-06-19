const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const generateUserStories = async (projectDescription) => {
  const prompt = `Generate 3 user stories from this project description in this format: "As a [role], I want to [action], so that [benefit]".

Description:
${projectDescription}`;

  const response = await groq.chat.completions.create({
    model: 'mixtral-8x7b-32768',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
  });

  return response.choices[0].message.content.split('\n').filter(Boolean);
};

module.exports = { generateUserStories };
