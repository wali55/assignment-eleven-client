import React from "react";

const Blogs = () => {
  return (
    <div className="h-screen">
      <div className="md:w-9/12 mx-auto mt-12">
        <h4 className="text-xl font-semibold mb-2">(1) What is the difference between JavaScript and NodeJS?</h4>
        <p>(a) Javascript is a programming language that is used for writing scripts on the website. NodeJS is a Javascript runtime environment.</p>
        <p>(b) Javascript can only be run in the browsers. We can run Javascript outside the browser with the help of NodeJS.</p>
        <p>(c) JavaScript is basically used on the client-side. NodeJS is mostly used on the server-side.</p>
      </div>
      <div className="md:w-9/12 mx-auto mt-12">
        <h4 className="text-xl font-semibold mb-2">(2) When should you use NodeJS and when should you use MongoDB?</h4>
        <p>Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.</p>
        <p>If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. </p>
      </div>
      <div className="md:w-9/12 mx-auto mt-12">
        <h4 className="text-xl font-semibold mb-2">(3) What is the difference between SQL and NoSQL?</h4>
        <p>(a) SQL are RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). NoSQL are Non-relational or distributed database system.</p>
        <p>(b) SQL databases have fixed or static or predefined schema. NoSQL databases have dynamic schema.</p>
        <p>(c) SQL databases are not suited for hierarchical data storage.NoSQL databases are best suited for hierarchical data storage.</p>
      </div>
      <div className="md:w-9/12 mx-auto mt-12">
        <h4 className="text-xl font-semibold mb-2">(4) What is JWT and how does it work?</h4>
        <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
      </div>
    </div>
  );
};

export default Blogs;
