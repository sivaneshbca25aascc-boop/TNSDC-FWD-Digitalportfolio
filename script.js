Perfect 👍

I’ll update your portfolio with:

1. Name → Sivanesh (already applied everywhere).

2. Background colors → White & Black theme

Here’s your updated CSS with a clean white + black style:

/* General Styles */

body {

  font-family: 'Poppins', sans-serif;

  margin: 0;

  padding: 0;

  line-height: 1.6;

  background: #ffffff; /* White background */

  color: #000000; /* Black text */

}

h1, h2, h3 {

  margin: 0;

  color: #000000;

}

a {

  text-decoration: none;

  color: inherit;

}

/* Navbar */

.navbar {

  background: #000000; /* Black navbar */

  color: white;

  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 15px 30px;

  position: sticky;

  top: 0;

  z-index: 1000;

}

.logo {

  font-size: 22px;

  font-weight: 600;

  color: white;

}

.nav-links {

  display: flex;

  list-style: none;

  gap: 20px;

}

.nav-links a {

  color: white;

  font-weight: 500;

  transition: color 0.3s;

}

.nav-links a:hover {

  color: #ff0000;

}

.menu-toggle {

  display: none;

  font-size: 28px;

  cursor: pointer;

}

/* Hero Section */

.hero {

  background: #000000; /* Black */

  color: #ffffff; /* White text */

  text-align: center;

  padding: 100px 20px;

}

.hero h1 {

  font-size: 2.5rem;

}

.hero h1 span {

  color: #ff0000; /* Highlight name in red */

}

.hero p {

  margin: 15px 0;

  font-size: 18px;

}

.btn {

  background: white;

  color: #000;

  padding: 10px 20px;

  border-radius: 5px;

  font-weight: 600;

  display: inline-block;

  margin-top: 15px;

}

.btn:hover {

  background: #000;

  color: white;

  border: 1px solid white;

}

/* About Section */

.about {

  padding: 60px 20px;

  text-align: center;

  background: #ffffff;

  color: #000000;

}

.about-content {

  margin-top: 20px;

}

.about-content img {

  max-width: 150px;

  border-radius: 50%;

  margin: 20px;

  border: 3px solid black;

}

/* Projects Section */

.projects {

  background: #f4f4f4;

  padding: 60px 20px;

  text-align: center;

}

.project-grid {

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  gap: 20px;

  margin-top: 30px;

}

.project-card {

  background: white;

  padding: 20px;

  border-radius: 10px;

  transition: transform 0.3s, box-shadow 0.3s;

  border: 1px solid #000000;

}

.project-card:hover {

  transform: scale(1.05);

  box-shadow: 0 5px 20px rgba(0,0,0,0.3);

}

/* Contact Section */

.contact {

  padding: 60px 20px;

  text-align: center;

  background: #ffffff;

  color: #000000;

}

form {

  max-width: 400px;

  margin: auto;

}

input, textarea {

  width: 100%;

  padding: 10px;

  margin: 10px 0;

  border-radius: 5px;

  border: 1px solid #000000;

  background: #ffffff;

  color: #000000;

}

button {

  background: #000000;

  color: white;

  border: none;

  padding: 10px;

  width: 100%;

  border-radius: 5px;

  cursor: pointer;

}

button:hover {

  background: #ff0000;

}

/* Footer */

footer {

  background: #000000; /* Black footer */

  color: white;

  text-align: center;

  padding: 15px;

}

/* Responsive Navbar */

@media screen and (max-width: 768px) {

  .nav-links {

    display: none;

    flex-direction: column;

    background: #000000;

    position: absolute;

    top: 60px;

    right: 0;

    width: 200px;

    padding: 20px;

  }

  .nav-links.show {

    display: flex;

  }

  .menu-toggle {

    display: block;

    color: white;

  }

}

✅ This gives you a white + black minimal theme, with:

Black navbar + footer

White background content sections

Your name (Sivanesh) highlighted in red in the hero section

Would you like me to also update the logo text (MyPortfolio) so it says Sivanesh Portfolio?