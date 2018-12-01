import React, { Component } from 'react';
import logo from "./logo.svg";
import './Summary.css';

class Summary extends Component {
  render() {
    return (
      <div className="Summary">
	  <header className= "Summary-header">
	  <a href="https://reactjs.org/"><img src={logo} className="Summary-logo" alt="logo" /></a>
         <h1 className="Summary-title">React</h1>
		 </header>
		<h2> What is it? </h2>
		<p> It is a JavaScript library that is used to build user interfaces. It is lightweight, fast and is one of the most convenient ways to execute code on your computer. It can be used as a base in the development of single page or mobile applications. It was made by Facebook in 2013. </p>
				<hr/>
		<h2> Strengths </h2>
		        <ul>
              <li>Virtual DOM in ReactJS makes updates really quick and allows for the building of a highly dynamic UI</li>
              <li>Open-source Facebook library which is constantly developing and is also open to the community</li>
              <li>ReactJS allows for direct work with components, and also uses downward data binding to make sure that changes of child structures don’t affect their parents, which makes the code stable</li>
        </ul>
				<h2> Weaknesses </h2>
		        <ul>
              <li>React technologies are updating and accelerating so fast that there is no time to write proper instructions</li>
              <li>Uses JSX, which allows mixing of HTML with Javascript, which takes some time to get used to</li>
              <li>Environment is constantly changing, so developers must regularly relearn the new ways of doing things</li>
        </ul>
		<hr/>
		<h2> Who is it for? </h2>
		<p> React has become very popular among developers and is because of its large potential to do many things. It is mainly used by developers who want to create larger than normal web applications which use data that can change over time, without reloading the page. React is currently being used by Facebook, Instagram, Netflix, New York Times, Yahoo! Mail, Khan Academy, WhatsApp and DropBox. React helps all these applications with their startup seepd, runtime performance and modularity.</p>
		
	  
	    <h2 style="font-size:20px;">What is Rest API Backend?</h2>
		<p> A REST is an application program interface (API) which uses HTTP requests to GET, PUT, POST and DELETE data. </p>
	  <blockquote cite="https://searchmicroservices.techtarget.com/definition/RESTful-API"></blockquote>
				<hr/>
		<h2 style="font-size:20px;">Strength of Rest?</h2>
		        <ul>
              <li>Strengths include friendliness to existing operating environments (esp. firewalls), multi-language client compatibility, and (re-)use of prosperous ecosystems for things like security (authentication, authorization), and higher level libraries for frameworks and widgets.</li>
              <blockquote cite="https://www.quora.com/What-are-the-pros-and-cons-of-RESTful-API-first-design-when-programming"></blockquote>
	  <li>It is useful for building APIs that allow users to connect and interact with cloud services. JSON is the most used standard for REST APIs.</li>
             <blockquote cite="https://bbvaopen4u.com/en/actualidad/rest-api-what-it-and-what-are-its-advantages-project-development"></blockquote>
	  <li>Also it includes separation between the client and the serve, visibility, reliability and scalability, and The REST API is always independent of the type of platform or languages.</li>
        </ul>
				<h2 style="font-size:20px;">Weakness of Rest?</h2>
		        <ul>
              <li>Weakness include complexity if writing a "simple" program in a compiled language, as you have to deal with all of a web server and json encoding.</li>
              <li>They are not resource oriented so the handling code that maps URIs to tends to get messy.</li>
           
        </ul>
		<hr/>
		<h2 style="font-size:20px;">Who and what is it used for?</h2>
		<li>Rest has become very popular among developers. They are used by such sites as Amazon, Google, LinkedIn and Twitter.</li>
		
	  
	    
	    </div>
    );
  }
}

export default Summary;

