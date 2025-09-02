---
title: My Take on Prompt Engineering and Major AI Models
description: A pragmatic look at prompt engineering, with practical techniques and a personal comparison of today's leading AI models like Claude, GPT, and Gemini.
date: 2025-09-01 22:49:00 +0900
categories: [study]
tags: [AI, Prompt Engineering, LLM, study, claude, gpt, gemini, ai models]
pin: true
math: false
mermaid: false
image:
  path: /assets/img/AiTake/chatgpt-plus.jpg
  alt: ChatGPT Plus
---

# My Stance on Prompt Engineering

To be frank, I believe deep specialization in prompt engineering yields diminishing returns for the average user. While it's a fascinating field, mastering a few powerful, general principles is far more practical than getting lost in the weeds. This post is a summary of my journey: what I've learned, what I already knew, and my personal take on the major AI models I work with daily.

## Practical Techniques That Actually Work

Even with a minimalist philosophy, I’ve picked up a couple of effective techniques that have notably improved my AI interactions.

### 1. Use HTML-like Tags for Structure

I used to rely on code blocks to structure my prompts. However, I've found that using HTML-like tags is a more robust method to delineate different parts of a prompt. It helps the AI clearly distinguish between instructions, references, and examples.

For example:
```xml
<instructions>
Please analyze the following user feedback.
</instructions>
<feedback_text>
The user reported that the application crashes on startup.
</feedback_text>
```

### 2. AI's Persona

Assigning a persona to the AI is a technique I hadn't used habitually, but it can be surprisingly effective. It's more than just a gimmick; it sets a specific context, tone, and knowledge level for the AI to emulate.

For instance:
> "Assume you are a seasoned professor of AI research. Please guide me through the core concepts of reinforcement learning."

This often yields more detailed and contextually appropriate responses than a generic query.
{: .prompt-tip }

> Structure and persona turn a generic request into a precise directive, like aiming a spotlight instead of just turning on the room lights.
{: .prompt-tip }

## Core Principles That Always Matter

Some aspects of interacting with AI have been clear from the start and remain fundamental to getting quality results.

### 1. Maximize Signal, Minimize Noise

Context is king, but *relevant* context is the kingdom. Provide the model with what it needs to succeed, not just everything you have. State the goal, constraints, and key assumptions. When asking for code, include the function’s purpose, its API, and where it fits in the system.

Conversely, "polluting" the context with irrelevant information, like a blurry photo of a screen for a debugging session, is counterproductive.

### 2. Deconstruct Large Problems

Expecting an AI to handle a vague, large-scale request in one go is a recipe for mediocrity. Breaking down a complex task into smaller, sequential steps is a far superior strategy.

For instance, instead of asking to "create a presentation about Topic X," a better approach is to break it down:
1.  Outline the key sections for a presentation on Topic X.
2.  Draft the content for each slide.
3.  Suggest a visual theme and layout.
4.  Generate speaker notes.

If you don't know the steps, you can ask the AI to propose a plan.  
 Still, applying your own domain knowledge to deconstruct the task will **always** produce a superior outcome.

> Great prompts are built on two pillars: a focused signal and manageable steps.
{: .prompt-tip }

## My Practical Checklist

Here’s a distilled checklist of the tactics I find myself using daily.

1.  **Structure First**: Use tags (`<goal>`, `<context>`, `<constraints>`) to clearly delineate the components of your prompt.
2.  **Persona on Purpose**: Only assign a persona when it meaningfully adds constraints or provides a useful frame of reference (e.g., "act as a skeptical code reviewer").
3.  **Plan Before Execution**: For complex tasks, ask the AI for a concise plan or outline first. Agreeing on the structure prevents wasted effort.
4.  **Evidence-First for Facts**:
    -   Insist on citations with URLs *before* the AI makes a claim.
    -   For research tasks, ask for an "evidence table" (source, claim, URL) before the final synthesis.
5.  **Specify the Output**: Clearly define the desired format, length, style, and any acceptance criteria the output must meet.
6.  **Iterate Smartly**: Work in small loops. Freeze what’s working and change only one variable at a time to isolate what improves the result.

## A Comparative Look at Major AI Models

It's clear that not all models are created equal. Different models excel at different tasks, and understanding their strengths is key to using them effectively. Here are my personal observations.

### Summary

| Feature                 | Claude                                           | GPT                                                      | Gemini                                           |
| ----------------------- | ------------------------------------------------ | -------------------------------------------------------- | ------------------------------------------------ |
| **Primary Strength**    | Code Generation                                  | Brainstorming & Ideation                                 | Information Synthesis<br>& Brainstorming         |
| **Coding Ability**      | Excellent<br>(can over-engineer)                 | Capable All-rounder                                      | Reliable<br>(sticks to prompt)                   |
| **Hallucination**       | Very Low                                         | High<br>(without self-awareness)                         | High<br>(but sometimes obvious)                  |
| **Prompt Adherence**    | Low<br>(often adds<br>unrequested features)      | Medium<br>(can add<br>extra complexity)                  | High<br>(sticks closely<br>to requirements)      |
| **Search & Vetting**    | Normal                                             | Normal        | Strong<br>(excels at<br>synthesizing information) |


### 💻 Claude: The Coder

In my experience, **Claude is a top-tier model for coding tasks**. Its ability to understand and generate code is exceptional. A standout feature is its remarkably low hallucination rate—it rarely invents facts, which builds a high degree of trust. However, this strength in coding is sometimes a double-edged sword. It can be prone to over-engineering solutions by adding unrequested features without mentioning them. For instance, when asked for a script to simply transmit raw BVP sensor data, it preemptively added logic to calculate and send heart rate as well. While its writing capabilities are also strong, its performance in brainstorming and decision-making seems weaker, often favoring "safe" or middle-of-the-road answers.

### 🧠 GPT: The Brainstormer

I find **GPT to be a strong contender for brainstorming and ideation**, rivaling others in its ability to generate creative options and explore different angles of a topic. However, it seems to struggle with vetting the credibility of online sources, often accepting what it finds at face value. Similar to Gemini, it can be prone to hallucinations without self-awareness and also shares Claude's habit of trying to anticipate user needs, sometimes adding unnecessary complexity. While its coding abilities are solid, I feel they don't quite reach Claude's level. It's a capable all-rounder but hasn't become my go-to for specialized tasks.

### 🧩 Gemini: The Synthesizer

From my perspective, **Gemini excels at search-related queries and synthesizing information**, with brainstorming capabilities that are on par with GPT's. In contrast to other models, Gemini seems to have a better grasp of what a user explicitly asks for, sticking closer to the prompt's requirements.

Regarding its coding abilities, while the raw output may not always match the complexity of Claude's, its greatest strength is its predictability and reliability. It follows instructions with high fidelity, making it a valuable partner when you need the output to strictly match the requirements.
Through my long-term coding collaboration with Gemini 2.5 Pro, its most impressive trait is its **long-context memory**. It demonstrates a remarkable ability to recall details from earlier in a complex, extended conversation—a significant advantage for iterative development.

The main drawback, however, is its tendency to **hallucinate**. This can manifest in subtle ways, but sometimes it's stark. For instance, when asked to find research papers, it might invent one with a plausible title, authors, and a fake URL that leads nowhere.

> Each AI model has its own 'personality' and skillset. Finding the right one for your task is the first step to a great result.
{: .prompt-tip }


## Debatable "Best Practices"

There are a few commonly cited prompting techniques that I'm not yet convinced of.
-   **Focus on "Dos" over "Don'ts"**: The idea that you should always frame requests positively.
-   **Use a respectful tone**: The theory that being polite to the AI yields better results.

My experience hasn't shown these to have a consistent, measurable impact, but I remain open to the possibility.

## Conclusion

In the end, effective interaction with AI is less about secret handshakes and more about clarity, context, and choosing the right tool for the job. While the models evolve, the core principles of clear communication and structured thinking remain timeless.

---

> This post reflects my current understanding and personal experience. The field of AI is evolving at an incredible pace, and these takes are subject to change as the models—and my interactions with them—continue to develop.
{: .prompt-info }
