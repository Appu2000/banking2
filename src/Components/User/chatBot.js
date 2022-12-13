import React, { useEffect } from 'react'
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react"

function HelperBot(props) {


  const steps = [

    {

      id: "Greet",

      message: "Hello, Welcome to EASY BANk",

      trigger: "Done",

    },

    {

      id: "Done",

      message: "Please enter your name!",

      trigger: "waiting1",

    },

    {

      id: "waiting1",

      user: true,

      trigger: "Name",

    },

    {

      id: "Name",

      message: "Hi {previousValue}, How May I Help You",


      trigger: "help",

    },
    {
      id: "help",
      message: "Please Select below options",
      trigger: "issues",

    },

    {

      id: "issues",

      options: [

        {

          value: "Transaction",

          label: "Transaction",

          trigger: "Transaction",

        },

        {
          value: "Want to Download Transaction History",

          label: "Want to Download Transaction History",

          trigger: "Want to Download Transaction History"
        },

        {
          value: "Offers",
          label: "Offers",
          trigger: "Offers"
        },

        {
          value: "close",
          label: "Exit",
          trigger: "close"
        }

      ],

    },

    {

      id: "close",
      message :"bye bye..",
      end: true,
      
    },

    {

      id: "Transaction",

      message:

        "In Transaction menu you are able to perform All type of  Transaction like mobile recharge , Bill payment etc",

      trigger: "issues",

    },

    {

      id: "Want to Download Transaction History",

      message: "In Transaction History option you are able to download all your Trasaction Records",

      trigger: "issues",

    },
    {

      id: "Offers",

      message:

        "Get Extra 1% cash back on Credit Card Payments",

      trigger: "issues",

    },

  ];

  if (props.value == true) {
    return (

      <div>
        <Segment floated="right">
          <ChatBot steps={steps} />
        </Segment>
      </div>

    )
  }
  else {
    return (<div></div>)
  }
}


export default HelperBot;