//React
import React from 'react'
// Components
//Styles
import styles from '../styles/Home.module.css'
// Animations

export default function index() {
  return (
    <div class="container has-text-centered">
      <h1 class="title my-6">Next Project w/ Bulma</h1>
      <div class="buttons is-flex is-justify-content-center">
        <button class="button is-primary">Primary</button>
        <button class="button is-link">Link</button>
        <button class="button is-info">Info</button>
        <button class="button is-success">Success</button>
        <button class="button is-warning">Warning</button>
        <button class="button is-danger">Danger</button>
      </div>
    </div>
  );
}
