const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

class AIAssistant {
  static async getCodeHints(code, language, context) {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `
        As a coding assistant, analyze this ${language} code and provide hints:
        ${code}
        Context: ${context}
        Provide specific suggestions for:
        1. Logic improvements
        2. Best practices
        3. Potential bugs
        4. Performance optimizations
      `;
      
      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      console.error('AI Code Hints Error:', error);
      throw new Error('Failed to generate code hints');
    }
  }

  static async reviewCode(code, language) {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `
        Review this ${language} code for quality and best practices:
        ${code}
        Analyze:
        1. Code style and naming conventions
        2. Design patterns and architecture
        3. Security considerations
        4. Documentation needs
        5. Test coverage suggestions
        6. Code complexity and maintainability
        7. Error handling practices
        8. Performance optimization opportunities
      `;
      
      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      console.error('AI Code Review Error:', error);
      throw new Error('Failed to review code');
    }
  }

  static async matchJobProfile(userSkills) {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `
        Given these skills and proficiency levels:
        ${JSON.stringify(userSkills)}
        Suggest job roles and positions that match this profile.
        Include:
        1. Job titles
        2. Required experience level
        3. Skill match percentage
        4. Additional skills to acquire
        5. Recommended learning path
        6. Industry-specific requirements
        7. Salary range expectations
      `;
      
      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      console.error('Job Match Error:', error);
      throw new Error('Failed to generate job matches');
    }
  }

  static async generateLearningPath(userSkills, targetRole) {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `
        Create a personalized learning path:
        Current Skills: ${JSON.stringify(userSkills)}
        Target Role: ${targetRole}
        
        Provide:
        1. Skill gaps analysis
        2. Recommended courses and resources
        3. Project suggestions
        4. Timeline estimates
        5. Milestones and checkpoints
      `;
      
      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      console.error('Learning Path Error:', error);
      throw new Error('Failed to generate learning path');
    }
  }
}

module.exports = AIAssistant;