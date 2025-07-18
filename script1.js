const users = [
  {
    name: "Aarav Mehta",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Passionate traveler and aspiring photographer. Coffee enthusiast and lover of late-night coding."
  },
  {
    name: "Saanvi Sharma",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fHww",
    bio: "UX designer who loves painting and long walks. Always up for a good book and a cup of chai."
  },
  {
    name: "Rohan Gupta",
    pic: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww",
    bio: "Tech geek and gamer. Coding by day, raiding dungeons by night."
  },
  {
    name: "Ishita Desai",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
    bio: "Environmentalist and yoga enthusiast. Believes in minimalism and mindfulness."
  },
  {
    name: "Kabir Singh",
    pic: "https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Film buff and amateur screenwriter. Dreams of directing a feature film one day."
  },
  {
    name: "Ananya Joshi",
    pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Food blogger and recipe creator. Loves experimenting in the kitchen and sharing stories with flavors."
  },
  {
    name: "Devansh Rao",
    pic: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Adventure seeker and mountain biker. Never says no to a weekend trek."
  },
  {
    name: "Anaaya Kapoor",
    pic: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Digital marketer with a flair for photography. Finds beauty in the everyday."
  }
];
function showUsers(arr) {
  const container = document.querySelector(".cards");
  container.innerHTML = ""; // 🔧 Clear previous cards

  arr.forEach(function (user) {
    // Create card container
    const card = document.createElement("div");
    card.classList.add("card");

    // Create image
    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    // Create blurred layer
    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.classList.add("blurred-layer");

    // Create content wrapper
    const content = document.createElement("div");
    content.classList.add("content");

    // Create heading
    const heading = document.createElement("h3");
    heading.textContent = user.name;

    // Create paragraph
    const paragraph = document.createElement("p");
    paragraph.textContent = user.bio;

    // Assemble elements
    content.appendChild(heading);
    content.appendChild(paragraph);

    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    // Append the card to the container
    container.appendChild(card);
  });
}

showUsers(users);

// 🔍 Input filter
let inp = document.querySelector(".inp");
inp.addEventListener("input", function () {
  const query = inp.value.toLowerCase();
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().startsWith(query)
  );
  showUsers(filteredUsers);
});