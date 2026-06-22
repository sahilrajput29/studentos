// Mock AI responses - patterns and responses for different topics
const careerTopics = {
  roadmap: [
    "I can help you create a personalized career roadmap. To get started, tell me:\n1. Your current year of study\n2. Your branch/major\n3. Your career goal\n\nI'll then provide a detailed roadmap with skills, projects, and timeline.",
    "Great! Based on your input, I recommend focusing on:\n• Frontend fundamentals (HTML, CSS, JavaScript)\n• React for modern web development\n• Backend basics (Node.js/Express)\n• Database design (SQL & MongoDB)\n\nWould you like a detailed learning path for any of these?",
  ],
  interview: [
    "I can help you prepare for interviews! You can ask me:\n• Common questions for specific companies\n• DSA problems and solutions\n• Behavioral interview tips\n• Technical interview strategies\n• Resume optimization advice\n\nWhat would you like help with?",
    "Here are some common interview tips:\n1. Start with your strongest experience\n2. Use the STAR method for behavioral questions\n3. Practice coding problems daily\n4. Research the company thoroughly\n5. Ask thoughtful questions at the end\n\nDo you want to practice a specific type of question?",
  ],
  resume: [
    "I can help you improve your resume! Share the following and I'll provide feedback:\n• Your current role/experience\n• Skills you want to highlight\n• Any specific job you're targeting\n\nI'll suggest improvements for ATS optimization and impact.",
    "Resume improvement tips:\n• Use action verbs (Led, Architected, Optimized)\n• Include quantifiable metrics (30% improvement, 10k+ users)\n• Tailor to job description\n• Keep to 1 page for freshers, 2 for experienced\n• Use industry keywords\n\nWhat section would you like to improve?",
  ],
  skill: [
    "I can recommend skills to learn! Tell me:\n1. Your goal (Web Dev, AI/ML, Mobile, etc.)\n2. Your current level\n3. Time available per week\n\nI'll create a learning plan with resources.",
    "Great learning path recommendation! Focus on building projects while learning. Each project should:\n• Solve a real problem\n• Use the skills you're learning\n• Be portfolio-worthy\n• Take 2-4 weeks\n\nWhat type of project interests you?",
  ],
  general: [
    "Hello! I'm your AI Career Coach. I can help you with:\n• Career roadmap planning\n• Interview preparation\n• Resume optimization\n• Skill development\n• Project recommendations\n• Internship/job search strategy\n\nWhat would you like help with today?",
  ],
};

function getRandomResponse(topic: string[]): string {
  return topic[Math.floor(Math.random() * topic.length)];
}

function getMockAIResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();

  // Check for keywords and return relevant response
  if (
    message.includes('roadmap') ||
    message.includes('path') ||
    message.includes('learn')
  ) {
    return getRandomResponse(careerTopics.roadmap);
  } else if (
    message.includes('interview') ||
    message.includes('prepare') ||
    message.includes('question')
  ) {
    return getRandomResponse(careerTopics.interview);
  } else if (
    message.includes('resume') ||
    message.includes('cv') ||
    message.includes('application')
  ) {
    return getRandomResponse(careerTopics.resume);
  } else if (
    message.includes('skill') ||
    message.includes('technology') ||
    message.includes('learn')
  ) {
    return getRandomResponse(careerTopics.skill);
  } else if (message.length < 5) {
    return getRandomResponse(careerTopics.general);
  } else {
    // Default thoughtful response
    return `Great question! Based on what you're asking, I'd be happy to help. Could you give me a bit more context about whether this is related to:\n• Career planning\n• Interview preparation\n• Resume review\n• Skill development\n• Something else?\n\nThat way I can provide more targeted advice.`;
  }
}

export { getMockAIResponse };
