const chatInput = document.querySelector(".chat-search-box input");
const chatButton = document.querySelector(".chat-search-box button");
const answerBox = document.querySelector(".chat-answer-box");

function addMessage(type, text) {
  const message = document.createElement("div");
  message.className = "chat-message " + type;
  message.innerText = text;
  answerBox.appendChild(message);
}

function getBotAnswer(question) {
  if (question.includes("입장료") || question.includes("요금")) {
    return "국립세종수목원 입장료는 대상에 따라 다를 수 있습니다. 정확한 금액은 입장권 구매 페이지에서 확인해주세요.";
  }

  if (question.includes("주차")) {
    return "주차장은 수목원 방문객을 위해 운영됩니다. 주말이나 행사 기간에는 혼잡할 수 있어 여유 있게 방문하는 것이 좋습니다.";
  }

  if (question.includes("운영시간") || question.includes("관람시간")) {
    return "관람시간은 보통 09:00~18:00이며, 입장마감 시간은 17:00 기준으로 안내할 수 있습니다.";
  }

  if (question.includes("휴관") || question.includes("쉬는날")) {
    return "휴관일은 수목원 운영 일정에 따라 달라질 수 있습니다. 방문 전 공지사항을 확인하는 것이 좋습니다.";
  }

  if (question.includes("위치") || question.includes("주소")) {
    return "국립세종수목원은 세종특별자치시 수목원로 136에 위치해 있습니다.";
  }

  return "해당 내용은 현재 준비된 답변이 없습니다. 입장료, 주차, 운영시간, 휴관일, 위치를 질문해보세요.";
}

function submitQuestion() {
  const question = chatInput.value.trim();

  if (question === "") {
    return;
  }

  addMessage("user", question);

  const answer = getBotAnswer(question);
  addMessage("bot", answer);

  chatInput.value = "";
}

chatButton.addEventListener("click", submitQuestion);

chatInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submitQuestion();
  }
});