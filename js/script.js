class StartUp {
    constructor() {
        this.colors = ['red', 'blue', 'gold'];
        this.chicagoStartups = [
            '  Interior   Define  ',
            'Classkick',
            'teaBOT  .$',
            'Pritzker Group Venture Capital',
            'Teln!yx !!',
            'ShipBob ~~$$$',
            'Hologram',
            'Tovala    ',
            '    MANOR',
            'ShuttleCloud 999987',
            'gtrot @@@@@',
            'DealsGoRound ****',
            ' Groovebug',
            'Stage$$$Bloc',
            'Shiftgig',
            'ParkWhiz'
        ];

    }

    clearDocument(){
        // get the rootContainer
        const rootDiv = document.getElementById("rootContainer");

        // if rootDiv has child, remove it.
        if(rootDiv) {
            while(rootDiv.hasChildNodes()) {
                rootDiv.removeChild(rootDiv.firstChild);
            }
        }
    }

    initDocument(){
        this.clearDocument();
        // create rootdiv
        let rootDiv = document.createElement('div');

        // give rootdiv an id
        rootDiv.id = 'rootContainer';

        // create container for the company
        let companyContainer = document.createElement('div');
        companyContainer.id = 'startupContainer';

        // iterate through the array and do something on each element
        
        this.chicagoStartups.forEach((startup, index)=>{

            // create container for each startup company
            let childDiv = document.createElement('div');

            // inject the name and index to the container
            childDiv.innerHTML = `${index} .) ${startup}`;

            // append each company cell to the company container
            companyContainer.appendChild(childDiv);
        }
        )
        // append companiesContainer into rootdiv
        rootDiv.appendChild(companyContainer);

        // append rootdiv into body of html
        document.body.appendChild(rootDiv);

        //bind event listenner to clean and count btn
        document.getElementById('btn-cleanandcount').onclick = this.cleanAndCountCharacters.bind(this);
    }

    renderReversedElements(){
        console.log("triggered");

        // get the reverseContainer
        var reverseContainer = document.getElementById('reverseContainer');

        // array to hold the revered company order
        var reversedChicagoStartups = [];

        /*
        TODO: REVERSE THE CONTENTS OF THE ARRAY WITHOUT USING THE BUILT IN REVERSE METHOD
        RETURN THE REVERSED ARRAY
    
        TIPS: 
        1.  REVIEW JAVASCRIPT ARRAY DATA STRUCTURE AND THE BUILTIN METHODS PROVIDED TO ALL ARRAYS
    
        2.  THIS IS A COMMON JOB INTERVIEW QUESTION, THAT SHOULD BE SOLVABLE BASED ON AN UNDERSTANDING OF DATA STRUTUCTURES REGARDLESS OF THE PROGRAMMING LANGUAGE
        */
        const chicagoStartupsReverse = () => {
            var reversedStartups = [];

            for(let i = this.chicagoStartups.length; i>0;i--) {
                reversedStartups.push(this.chicagoStartups[i-1]);
            }

            reversedStartups.forEach((startup)=>{
                var childDiv = document.createElement('div');

                childDiv.innerHTML = startup;

                reverseContainer.appendChild(childDiv);
            });

            return reversedStartups;
        }

        if(reverseContainer) {
            console.log('have a container!');
            if(reverseContainer.hasChildNodes()){
                console.log("the container has at least one child node");
                while(reverseContainer.hasChildNodes()) {
                    // put the last to be the first in reverse container
                    reversedChicagoStartups.push(reverseContainer.lastChild.innerHTML);

                    //at the mean time delete the last node of reverseContainer
                    reverseContainer.removeChild(reverseContainer.lastChild);
                }

                reversedChicagoStartups.forEach((chicagoStartup)=>{
                    // console.log(chicagoStartup);
                    var childDiv = document.createElement('div');
                    var text = document.createTextNode(chicagoStartup);
                    childDiv.appendChild(text);
                    reverseContainer.appendChild(childDiv);
                });

            }
            else {
                console.log("the container has no child node");
                chicagoStartupsReverse();
            }
        } else {
            console.log('reversed container is null!');
        }
    }

    initReverse(){
        // create container for reversed companyarray
        let reverseContainer = document.createElement('div');
        reverseContainer.id = 'reverseContainer';

        //create button as reverse event triger
        let reverseBtn = document.createElement('button');
        reverseBtn.id = 'btn-reverse';

        //add name for the button
        reverseBtn.innerText = 'Reverse';

        //add event that trigered by the button
        reverseBtn.onclick = this.renderReversedElements.bind(this);

        // add button to root
        document.getElementById('btn-cleanandcount').insertAdjacentElement('afterend', reverseBtn);

        // add reversedContainer to root
        document.getElementById('rootContainer').appendChild(reverseContainer);
    }

    cleanAndCountCharacters() {
        console.log('CLEAN AND COUNT CHARACTERS');
        let clearedArray = []
        /*
        TODO: REMOVES ANY SPECIAL CHARACTERS FROM EACH COMPANY NAME AND
        DISPLAYS THE NUMBER OF REMAINING CHARACTERS NEXT TO THE FULL WORD.
        DONT FORGET TO REMOVE LEADING AND TRAILING WHITESPACES AS WELL
        */
       this.chicagoStartups.forEach((startup)=>{
           const cleared = startup.replace(/[^a-zA-Z]/g, '').trim();

           const number = cleared.length;

           clearedArray.push(`${cleared}:${number}`)
       })

       const nameContainer = document.getElementById('rootContainer').firstChild;

       if(nameContainer) {
           while(nameContainer.hasChildNodes()) {
               nameContainer.removeChild(nameContainer.firstChild);
           }
       } else {
           console.log('nothing');
       }

       clearedArray.forEach((startup, index)=>{
            // create container for each startup company
            let childDiv = document.createElement('div');

            // inject the name and index to the container
            childDiv.innerHTML = `${index} .) ${startup}`;
           
            // append each company cell to the company container
            nameContainer.appendChild(childDiv);
       })

       this.chicagoStartups = clearedArray;
       console.log(clearedArray);
    }

    initToggle(){
        let togglebtn = document.createElement('button');
        togglebtn.innerText = 'Toggle';
        togglebtn.id = 'btn-toggle';
        togglebtn.onclick = this.toggleDisplay.bind(this);

        document.getElementById('btn-reverse').insertAdjacentElement('afterend',togglebtn);

    }

    toggleDisplay(){
            /*
            TODO: REVIEW THE CODE IN THE PROVIDED REVERSE EXAMPLE, USE JAVASCRIPT TO ADD A CLICKABLE BUTTON 
            CALLED "Toggle Display" ... WHEN THE USER CLICKS THE BUTTON, IT RENDERS THE DISPLAY OF THE COMPANY NAMES 
            FROM VERTICAL, TO HORIZONTAL.
            IF THE USER CLICKS THE TOGGLE BUTTON AGAIN THE NAMES SHOULD ONCE AGAIN BE DISPLAYED VERTICALLY.
    
            TIPS: 
                1.  MAKE SURE TO READ AND UNDERSTAND THE DIFFERENCE BETWEEN BLOCK ELEMENTS SUCH AS A DIV, 
                    AND INLINE ELEMENTS SUCH AS A SPAN.
    
                2.  DIVIDE AND CONQUER.
    
                3.  
            */

           let startupContainer = document.getElementById('startupContainer');
           if(startupContainer){
               startupContainer.childNodes.forEach((childnode)=>{
                   if(childnode.style.display === 'inline') {
                    childnode.style.display = 'block'
                   } else {
                    childnode.style.display = 'inline'
                   }
               })
           }
    }

    addstyle(){
        document.getElementById('startupContainer').className = 'startups-container';
        document.getElementById('reverseContainer').className = 'red';
    }
}

var flags = {
    displayInstructions: true
};

// This is a Test For IIF!!

//TODO INVOKE THIS ANONYMOUS FUNCTION TO DISPLAY HOMEWORK INSTRUCTIONS IN THE CONSOLE
/* simply add another () to call the function itself, it's in ES5. In ES6, we use arrow function*/
(function() {
    if (flags.displayInstructions) {
        console.log(`
                        ASSUMPTIONS: !!! NO JQUERY !!! 
                                     TODO INDICATES THAT A SOLUTION IS REQUIRED
                                     PLEASE INCLUDE YOUR GITHUB URL AS A COMMENT
                                     EX. // https://github.com/Chandler-Gegg/javascript101.git

                        Feel free to complete the exercises in whatever order you like.  

                        Make sure to push your code to your own github repo as well as SUBMIT A ZIPFILE TO D2L.
                        HOMEWORK IS DUE WEDNESDAYS AT MIDNIGHT NO EXCEPTIONS.
                        dont forget to slack me the url to your github account as well.  

                        You can earn extra credit by using the provided css classes in the style tag or additionally 
                        you can pull in an external css library like bootstrap.  if you bring in bootstrap make sure to style
                        the buttons using bootstraps built in button styling classes.

                        Additionally, can earn extra credit by using an object to count the number of occurrences 
                        of each character accross all startup names and style and display the results as part of the
                        "cleanAndCountCharacters" function.

                        If you are having trouble getting started, I would spend a lot of time reviewing the source code provided in the reverse example.
                        Make sure I understand whats going on and do a google search on anything that is confusing.  
                        THE BETTER YOU UNDERSTAND THE EXAMPLE THE EASIER THIS SHOULD BE. THEN REVIEW THE TODOS AND START BY TRYING TO SOLVE THE EASIEST
                        PROBLEM.

                        FROM MY OWN EXPERIENCE, I FIND THAT WHEN IM STRUGGLING WITH A PROBLEM, IT USUALLY MEANS
                        I DONT FULLY UNDERSTAND THE TOOLS THAT I AM USING.

                        GOOD LUCK, SEE YOU ON THE FLIPPITY FLOP "\_(**/)_/"

                    `);
    }
    
})();


const startup = new StartUp();

startup.initDocument();

startup.initReverse();

startup.initToggle();

startup.addstyle();

// startup.cleanAndCountCharacters();