app.js

team -> []

getManagerDetails
   push managerDetails to Team
   Then call createTeam

createTeam
   first ask what needs to be added:
      Intern
         ask intern questions -> create an intern instance and push to team
      Engineer
         ask engineer questions -> create an engineer instance and push to team
      Nothing to be added
         generate html with team info.

