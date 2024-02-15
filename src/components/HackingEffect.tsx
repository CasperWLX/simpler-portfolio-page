import React, { useState, useEffect } from 'react';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const expertise = ['SOFTWARE DEVELOPER', 'FRONTEND DEVELOPER', 'BACKEND DEVELOPER', 'FULLSTACK DEVELOPER'];

const HackingEffect = () => {
    const [text, setText] = useState(expertise[0]);
    const [currentExpertiseIndex, setCurrentExpertiseIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentExpertiseIndex(prevIndex => (prevIndex + 1) % expertise.length);
        }, 3000); // Change expertise every 3 seconds

        const hackingText = document.getElementById("change-text");
        if (hackingText) {
            let iteration = 0;
            let textContent = expertise[currentExpertiseIndex]; // Initialize textContent here

            const hackingInterval = setInterval(() => {
                // Update the text content with the "hacked" text
                hackingText.innerText = textContent
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return textContent[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("");

                // Increment the iteration for the next character
                iteration++;

                // Stop the interval when all characters have been iterated
                if (iteration > textContent.length) {
                    clearInterval(hackingInterval);
                    setText(textContent);
                }
            }, 30); // Adjust the interval (milliseconds) as needed
        }

        return () => {
            clearInterval(interval);
        };
    }, [currentExpertiseIndex]); // Run the effect when currentExpertiseIndex changes

    return (
        <div>
            <p id="change-text" className='md:text-5xl sm:text-4xl text-xl font-bold font-mono'>{text}</p>
        </div>
    );
};

export default HackingEffect;