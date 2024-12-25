# Interview Cheat Sheet
This cheat sheet is based on **Andrei Neagoie's Master The Coding Interview: Data Structures + Algorithms** course. It summarizes key principles and strategies for excelling in technical interviews.
---
## The 3 Pillars of Good Code
1. **Readable**
2. **Time Complexity**
3. **Space Complexity**
---
## What Skills Interviewers Look For
- **Analytic Skills**: Can you think through problems and analyze effectively?
- **Coding Skills**: Is your code clean, simple, organized, and readable?
- **Technical Knowledge**: Do you understand the fundamentals of the job you're applying for?
- **Communication Skills**: Do you fit well within the company's culture?
---
## Step-by-Step Approach to Solving a Problem
1. **Understand the Question**
   - Write down key points (e.g., "sorted array") and verify details.
   - Ask clarifying questions if needed, but don't overdo it.
2. **Double Check**
   - What are the inputs and outputs?
3. **Define Goals**
   - What's the main objective? Optimize time, space, memory, etc.
4. **Brainstorm**
   - Start with a naive/brute-force solution. You don't need to code this—just explain it.
5. **Evaluate the Brute-Force Approach**
   - Why isn’t it optimal? (e.g., O(n²) time complexity, poor readability)
6. **Plan Your Solution**
   - Walk through the approach step-by-step. Identify potential bottlenecks or inefficiencies.
   - Use all provided information to avoid redundant work.
7. **Write Down the Steps**
   - Break the solution into modular, logical pieces.
8. **Code with Confidence**
   - Only start coding when you're sure about the solution.
   - Modularize your code to make it maintainable and readable.
9. **Handle Edge Cases**
   - Consider invalid inputs, edge cases, and large-scale data.
10. **Test and Debug**
    - Test for scenarios like no parameters, empty inputs, large datasets, etc.
11. **Reflect and Optimize**
    - Discuss potential improvements and alternative approaches.
    - Ask for feedback from the interviewer.
---
## Good Code Checklist
- :white_check_mark: It works.
- :white_check_mark: Good use of data structures.
- :white_check_mark: Code reusability (Do Not Repeat Yourself).
- :white_check_mark: Modular for readability, maintainability, and testability.
- :white_check_mark: Avoid nested loops (O(n²) or worse) unless necessary.
- :white_check_mark: Low space complexity (avoid recursion overflow or large memory copies).
---
## Heuristics for Common Questions
- Use **Hash Maps** for improving time complexity.
- For **sorted arrays**, apply binary search for O(log N) performance.
- **Divide and Conquer** for breaking down data into smaller chunks.
- **Sorting** can simplify certain problems.
- **Precomputed information** (e.g., sorted data) can speed up processing.
- Balance **time vs. space trade-offs**—storing extra state can optimize runtime.
---
## Tips for Success
- **Follow hints** and feedback from the interviewer.
- Optimize for **space-time tradeoffs** when appropriate.
- Always **communicate your thought process** clearly.
- Focus on quality and clarity over speed.
---
### Common Follow-Up Questions
- **Handling large inputs**: Use divide-and-conquer or distributed processing.
- **Streaming data**: Process chunks of data incrementally.
---
Remember: The goal isn't just solving the problem but demonstrating your thought process, technical skills, and ability to communicate effectively. Good luck! :dart: