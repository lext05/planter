import Layout from '../components/layout'
import React, { Component } from 'react';
import Router from 'next/router'

function Form() {
    const findPlant = async event => {
        event.preventDefault()
        console.log(event)
    
        const res = await fetch('/api/search', {
          body: JSON.stringify({
            water: event.target.water.value,
            light: event.target.light.value
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        })

        const result = await res.json()
        Router.push(result.url)
      }
  
    return (
      <form onSubmit={findPlant}>
        <div>
          <label htmlFor="water">Water</label>
          <select id="water">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <label>
            Light:
            <select id="light">
              <option value="low" name="light">
                Low
              </option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
        </div>
        <br />
        <button type="submit">Search</button>
      </form>
    );
  }

export default function Search({ allPlantsData }) {
  return (
    <Layout home>
      <h2>Find a plant that fits your needs!</h2>
      <Form />
    </Layout>
  );
}