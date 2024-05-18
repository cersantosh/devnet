import React, { useState } from "react";
import MessageEllipsis from "../../components/messages/message_ellipsis";

const AllMessages = () => {
  const messages = [
    {
      userId: 0,
      name: "Ujjwal",
      //  imageUrl:
      content: "Hello World, my boys.",
    },
    {
      userId: 1,
      name: "Ujjwal",
      //  imageUrl:
      content: "Hello World, my boys.",
    },
    {
      userId: 2,
      name: "Ujjwal",
      //  imageUrl:
      content: "Hello World, my boys.",
    },
    {
      userId: 3,
      name: "Ujjwal",
      //  imageUrl:
      content: "Hello World, my boys.",
    },
    {
      userId: 4,
      name: "Ujjwal",
      //  imageUrl:
      content: "Hello World, my boys.",
    },
    {
      userId: 5,
      name: "Ujjwal",
      //  imageUrl:
      content: "Hello World, my boys.",
    },
    {
      userId: 6,
      name: "Ujjwal",
      //  imageUrl:
      content: "Hello World, my boys.",
    },
    {
      userId: 7,
      name: "Ujjwal",
      //  imageUrl:
      content: "Hello World, my boys.",
    },
    {
      userId: 8,
      name: "Ujjwal",
      //  imageUrl:
      content: "Hello World, my boys.",
    },
    {
      userId: 9,
      name: "Ujjwal",
      //  imageUrl:
      content: "Hello World, my boys.",
    },
    {
      userId: 10,
      name: "Ujjwal",
      //  imageUrl:
      content: "Hello World, my boys.",
    },
    {
      userId: 11,
      name: "Ujjwal",
      //  imageUrl:
      content: "Hello World, my boys.",
    },
  ];

  const options = [
    {
      choice: "Action 1",
      action() {
        console.log("Action 1 triggered.");
      },
    },
    {
      choice: "Action 2",
      action() {
        console.log("Action 2 triggered.");
      },
    },
    {
      choice: "Action 3",
      action() {
        console.log("Action 3 triggered.");
      },
    },
  ];

  return (
    <>
      <div className="p-2 border-solid border-gray-500">
        <header className="text-lg font-semibold"> Messages </header>

        <ul role="list" className="flex flex-col mt-2 overflow-y-auto">
          {messages.map((message) => (
            <li
              key={message.userId}
              className="flex cursor-pointer mt-4 rounded-md hover:bg-gray-200"
            >
              <img
                className="h-12 w-12 rounded-full"
                src={message.picture}
                alt={message.name}
              />
              <div className="flex-1 pl-4 space-y-1">
                <p className="text-sm font-medium">{message.name}</p>
                <p className="text-sm text-gray-500">{message.content}</p>
              </div>
              <MessageEllipsis options={options} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AllMessages;
