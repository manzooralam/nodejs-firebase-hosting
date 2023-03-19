# nodejs-firebase-hosting

Step 1: $ firebase init hoisting

        
Step 2: $ firebase init functions

        
Step 3: Comes into functions folder and install express server framework : $ npm i express --save

Step 4: 

"hosting": {
    "public": "public",
    "rewrites": [        // here rewrites 
      {
        "source": "/timestamp",
        "functions":"helloworld"
      }
    ], 
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
  },
