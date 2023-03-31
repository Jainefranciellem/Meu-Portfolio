import React, { Component } from 'react'

export default class Bot extends Component {
  render() {
    return (
      <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5579996733389" className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-gray-900 text-4xl bg-purple-400 w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
        <ion-icon name="chatbubble-ellipses"></ion-icon>
      </a>
    )
  }
}
