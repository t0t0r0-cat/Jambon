async function loadArticles() {
    try {
      // Fetch and parse the JSON file
      const response = await fetch('articles.json');
      const articles = await response.json();
      
      // Get the container where articles will be displayed
      const container = document.getElementById('articles-container');

      // Base URL for the articles
      const baseUrl = "https://example.com/stuff/articles=";

      // Create a card for each article
      articles.forEach(article => {
        // Create article card container
        const card = document.createElement('div');
        card.classList.add('article-card');

        // Create and set the article image
        const img = document.createElement('img');
        img.src = article.image;
        img.alt = `${article.title} image`;

        // Create a container for text content
        const info = document.createElement('div');
        info.classList.add('article-info');

        // Create and set the article title link
        const titleLink = document.createElement('a');
        titleLink.href = `${baseUrl}${article.id}`;
        titleLink.textContent = article.title;
        titleLink.classList.add('article-title');

        // Create and set the article description
        const description = document.createElement('p');
        description.textContent = article.description;
        description.classList.add('article-description');

        // Append elements to the card
        info.appendChild(titleLink);
        info.appendChild(description);
        card.appendChild(img);
        card.appendChild(info);

        // Add card to the container
        container.appendChild(card);
      });
    } catch (error) {
      console.error("Error loading articles:", error);
    }
  }

  // Load articles on page load
  loadArticles();