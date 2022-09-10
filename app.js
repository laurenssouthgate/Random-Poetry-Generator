$.ajax({
    type: 'GET',
    url: "https://raw.githubusercontent.com/laurenssouthgate/Random-Poetry-Generator/main/words.json",
    dataType: 'json',
    success: function(data) {
        const d = JSON.parse(data)
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
            const poemLength = $('.line-number').val()
            for (var i = 0; i < poemLength; i++) {
                const sentences = [    
                    `A ${randomAdjective()} ${randomNoun()} ${randomVerb()}'s a ${randomAdjective()} ${randomNoun()}`,
                    `Please don't ${randomVerb()} my ${randomAdjective()} ${randomNoun()}`,
                    `When ${randomNoun()}'s appear they make my ${randomAdjective()} ${randomNoun()} ${randomVerb()}`,
                    `If only my ${randomAdjective()} ${randomNoun()} would ${randomVerb()} my ${randomAdjective()} ${randomNoun()}`,
                    `Your ${randomNoun()}'s are like a ${randomAdjective()} ${randomNoun()}`,
                    `The sky looked like a ${randomAdjective()} ${randomNoun()}`
                ]
                const str = sentences[Math.floor(Math.random() * sentences.length)];
                $('.poem').append(str + '<br>');
            }
        })
    }
})