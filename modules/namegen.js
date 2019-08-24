var NameGenerator ={
    isNameInUse: function (checkName){
        for(var existingName in Game.creeps) {
            if(existingName == checkName){
                return true;
            }
        }
        
        return false;
    },

    generateName: function(partialName) {
        
        var names = ['Abcde',
                'Abstinence',
                'Adolf Hitler',
                'Ahmiracle',
                'Aliviyah',
                'Ape In A Costume',
                '2 Apes In A Costume',
                'Appaloosa',
                'Apple',
                'Audio Science',
                'Baby Girl',
                'Babybell',
                'Beberly',
                'Beyoncé',
                'Billion',
                'Bob',
                'Bob The Builder',
                'Bogart Che Peyote',
                'Bread',
                'Britney',
                'Cameraman',
                'Cameran',
                'Cameron',
                'Clitis',
                'Colon',
                'C’KRET',
                'Da Real',
                'Danger',
                'Derfla',
                'Deriella',
                'Dimitri',
                'Dotcom',
                'D’Artagnan',
                'Elizabreth',
                'Ermengarde',
                'Fifi Trixiebell',
                'Gotham',
                'Gustavson',
                'Harley Quinn',
                'Hashtag',
                'He',
                'Heaven Lee',
                'Hellzel',
                'High Five',
                'Hottie',
                'Instructions Unclear',
                'I’munique',
                'Jammy',
                'Jannes',
                'Jerica',
                'Jermajesty',
                'Jihad',
                'Kaizyle',
                'Kale',
                'Like',
                'Little Sweetmeat',
                'Love-child',
                'Lucifer',
                'L’Oreal',
                'Mazelnut',
                'Mazen',
                'Melanomia',
                'Meldor',
                'Meltdown',
                'Mercury Constellation Starcruiser',
                'Merica',
                'Mhavrych',
                'Moxie Crimefighter',
                'My Firefighter',
                'Nevaeh',
                'North West',
                'Obamanique',
                'Olive Garden',
                'Orgasm',
                'Panthy',
                'Pea',
                'Peanutbutter',
                'Phelony',
                'Pilot Inspektor',
                'Prince Michael II/Blanket',
                'Princecharles',
                'Princesss',
                'Rage',
                'Really Good Lookin',
                'Reighleigh',
                'Rihannala',
                'Sadman',
                'Seven',
                'Shakira',
                'She',
                'Skatman',
                'Sssst',
                'The Beast',
                'The Machine',
                'Thermopylae',
                'Trillion',
                'Tu Morrow',
                'Tuff Tuf',
                'Umbrella',
                'Vejonica',
                'Yunique',
                'Zuma',
                'Zumba'];
        
    
        var generatedName = names[Math.floor(Math.random()*names.length)];
        
        if(partialName){
            generatedName = partialName + "-" + generatedName;
        }

        if(NameGenerator.isNameInUse(generatedName)){
            // Name already in use, generating double name
            // console.log('Name already in use, generating double name (' + generatedName + ')');
            return NameGenerator.generateName(generatedName);
        }
        return generatedName;
    }
}

module.exports = NameGenerator;