
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    
        "title": "Reference Check Survey",
        "pages": [
         {
          "name": "page1",
          "elements": [
           {
            "type": "text",
            "name": "question1",
            "title": "What is your relationship with the candidate?"
           },
           {
            "type": "text",
            "name": "question2",
            "title": "Can you verify the candidate’s employment and job title?"
           }
          ]
         },
         {
          "name": "page2",
          "elements": [
           {
            "type": "text",
            "name": "question3",
            "title": "Can you describe the candidate's job responsibilities?"
           },
           {
            "type": "text",
            "name": "question4",
            "title": "Can you describe the candidate's job responsibilities?"
           }
          ]
         },
         {
          "name": "page3",
          "elements": [
           {
            "type": "text",
            "name": "question5",
            "title": "Did he/she get along with management and co-workers?"
           },
           {
            "type": "text",
            "name": "question6",
            "title": "What makes the candidate a good fit for our current role of [insert role]?"
           }
          ]
         },
         {
          "name": "page4",
          "elements": [
           {
            "type": "text",
            "name": "question7",
            "title": "What is it like to work with the candidate?"
           },
           {
            "type": "text",
            "name": "question8",
            "title": "Did the candidate ever supervise other employees? How effectively?"
           }
          ]
         },
         {
          "name": "page5",
          "elements": [
           {
            "type": "text",
            "name": "question9",
            "title": "Was the candidate ever promoted within the company?"
           },
           {
            "type": "text",
            "name": "question10",
            "title": "What is it like to work with the candidate?"
           }
          ]
    }],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.location = "singlethanks.html";
    });

$("#surveyElement").Survey({ model: survey });