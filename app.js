$.ajax({
    type: 'GET',
    url: "https://raw.githubusercontent.com/laurenssouthgate/Random-Poetry-Generator/main/words.json",
    dataType: 'json',
    success: function(data) {
        const d = data
        const randomNoun = function(){
            const noun = d[0].nouns[Math.floor(Math.random() * d[0].nouns.length)];
            return noun;
        }
        const randomVerb = function(){
            const verb = d[0].verbs[Math.floor(Math.random() * d[0].verbs.length)];
            return verb;
        }
        const randomAdjective = function(){
            const adjective = d[0].adjectives[Math.floor(Math.random() * d[0].adjectives.length)];
            return adjective;
        }
        $('.parameters-btn').on('click', function(e) {
            e.preventDefault();
            $('.poem').html('');
            const poemLength = $('.line-number').val()
            for (var i = 0; i < poemLength; i++) {
                const sentences = [    
                    `A ${randomAdjective()} ${randomNoun()} ${randomVerb()}s a ${randomAdjective()} ${randomNoun()}`,
                    `Please don't ${randomVerb()} my ${randomAdjective()} ${randomNoun()}`,
                    `When ${randomNoun()}'s appear they make my ${randomAdjective()} ${randomNoun()} ${randomVerb()}`,
                    `If only my ${randomAdjective()} ${randomNoun()} would ${randomVerb()} my ${randomAdjective()} ${randomNoun()}`,
                    `Your ${randomNoun()}s are like a ${randomAdjective()} ${randomNoun()}`,
                    `The sky looked like a ${randomAdjective()} ${randomNoun()}`,
                    `Because the ${randomNoun()} is ${randomAdjective()} it makes me ${randomVerb()}`,
                    `I just wanna ${randomVerb()} your ${randomAdjective()} ${randomNoun()}`,
                    `And in the end the ${randomNoun()} you ${randomVerb()} is equal to the ${randomNoun()} you ${randomVerb()}`,
                    `${randomNoun()}s in the ${randomAdjective()} ${randomNoun()} make my ${randomNoun()} ${randomVerb()}`,
                    `${randomAdjective()} ${randomNoun()} I saw you ${randomVerb()} a ${randomNoun()}`,
                    `When I first ${randomVerb()} ${randomNoun()} I wanted to ${randomVerb()} the ${randomAdjective()} ${randomNoun()}`,
                    `Once upon a time you ${randomVerb()}ed so ${randomAdjective()}`,
                    `${randomAdjective()} ${randomNoun()}, I only wanted to ${randomVerb()} your ${randomAdjective()} ${randomNoun()}`,
                    `When the ${randomAdjective()} ${randomNoun()} ${randomVerb()}s its time to ${randomVerb()} the ${randomNoun()}`,
                    `The ${randomNoun()} coloured ${randomNoun()}s drifted through the ${randomAdjective()} sky`,
                    `There is no ${randomNoun()} to fix your ${randomAdjective()} ${randomNoun()}`,
                    `${randomAdjective()} ${randomNoun()}s make me slowly ${randomVerb()} you`,
                    `The ${randomNoun()} is ${randomVerb()} the ${randomAdjective()} ${randomNoun()}`,
                    `Nobody is coming to ${randomVerb()} you from the ${randomAdjective()} ${randomNoun()}`,
                    `Stop the ${randomAdjective()} ${randomNoun()} from ${randomVerb()}ing my ${randomNoun()}`,
                    `The ${randomNoun()}-coloured ${randomNoun()}s ${randomVerb()} slowly through the ${randomAdjective()} ${randomNoun()}`,
                    `All I see are ${randomAdjective()} ${randomNoun()}s ${randomVerb()}ing the ${randomNoun()}`,
                    `Why do so many ${randomAdjective()} ${randomNoun()}s end up ${randomVerb()}ing until they ${randomVerb()}?`,
                    `You should ${randomVerb()} the ${randomAdjective()} ${randomNoun()} whilst you have the chance`,
                    `Did you see how the ${randomAdjective()} ${randomNoun()} was ${randomVerb()}ing?`,
                    `Old ${randomAdjective()} ${randomNoun()} don't ${randomVerb()} no ${randomNoun()}s`,
                    `You got ${randomAdjective()} ${randomNoun()} in your ${randomAdjective()} ${randomNoun()}`,
                    `I was ${randomVerb()}ing on the ${randomNoun()} when I thought I ${randomVerb}ed some ${randomNoun()}`
                ]
                const str = sentences[Math.floor(Math.random() * sentences.length)];
                let sentence = str.substring(0, 1).toUpperCase() + str.substring(1)
                sentence = sentence.replace(/ a e/g, " an e");
                sentence = sentence.replace(/ a a/g, " an a");
                sentence = sentence.replace(/ a o/g, " an o");
                sentence = sentence.replace(/ a u/g, " an u");
                sentence = sentence.replace(/A e/g, "An e");
                sentence = sentence.replace(/A a/g, "An a");
                sentence = sentence.replace(/A o/g, "An o");
                sentence = sentence.replace(/A u/g, "An u");
                sentence = sentence.replace(/eing/g, "ing");
                sentence = sentence.replace(/sss/g, "ses");
                sentence = sentence.replace(/bing/g, "being");
                sentence = sentence.replace(/ys /g, "ies ")
                
                $('.poem').append(sentence + '<br>');
            }
        })
    }
})