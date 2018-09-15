// export default class StartUp {

//     constructor() {
//         this.colors = ['red', 'blue', 'gold'];
//         this.chicagoStartups = [
//             '  Interior   Define  ',
//             'Classkick',
//             'teaBOT  .$',
//             'Pritzker Group Venture Capital',
//             'Teln!yx !!',
//             'ShipBob ~~$$$',
//             'Hologram',
//             'Tovala    ',
//             '    MANOR',
//             'ShuttleCloud 999987',
//             'gtrot @@@@@',
//             'DealsGoRound ****',
//             ' Groovebug',
//             'Stage$$$Bloc',
//             'Shiftgig',
//             'ParkWhiz'
//         ];
//     }

//     initDocument(){
//         // create rootdiv
//         let rootDiv = document.createElement('div');

//         // give rootdiv an id
//         rootDiv.id = "rootContainer";

//         // create container for the company
//         let companyContainer = document.createElement('div');

//         // iterate through the array and do something on each element
//         this.chicagoStartups.forEach((startup, index)=>{

//             // create container for each startup company
//             let childDiv = document.createElement('div');

//             childDiv.innerHTML = `${index} .) ${startup}`;
//             // inject the name and index to the container

//             // append each company cell to the company container
//             companyContainer.appendChild(childDiv);
//         }
//         )
//         // append companiesContainer into rootdiv
//         rootDiv.appendChild(companyContainer);

//         // append rootdiv into body of html
//         document.body.appendChild(rootDiv);
//     }
// }