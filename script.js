# Chatme
An app or website
function search() {
  const query = document.getElementById("searchBox").value;
  if (query.trim() === "") {
    document.getElementById("result").innerHTML = "Please type something to search.";
  } else {
    document.getElementById("result").innerHTML = `You searched for: <b>${query}</b>`;
  }
}
