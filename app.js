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
                    `A ${randomAdjective()} ${randomNoun()} ${randomVerb()}'s a ${randomAdjective()} ${randomNoun()}`,
                    `Please don't ${randomVerb()} my ${randomAdjective()} ${randomNoun()}`,
                    `When ${randomNoun()}'s appear they make my ${randomAdjective()} ${randomNoun()} ${randomVerb()}`,
                    `If only my ${randomAdjective()} ${randomNoun()} would ${randomVerb()} my ${randomAdjective()} ${randomNoun()}`,
                    `Your ${randomNoun()}'s are like a ${randomAdjective()} ${randomNoun()}`,
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
                    `Stop the ${randomAdjective()} ${randomNoun()} from ${randomVerb()}ing my ${randomNoun()}`
                ]
                const str = sentences[Math.floor(Math.random() * sentences.length)];
                const sentence = str.substring(0, 1).toUpperCase() + str.substring(1)
                $('.poem').append(sentence + '<br>');
            }
        })
    }
})