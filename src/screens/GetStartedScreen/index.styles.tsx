import styled from "styled-components";

export const Wrapper = styled.div`
.banner {
  background: rgba(0, 0, 0, 0.05);
  margin-bottom: 3em;
  padding: 40px 0 50px;
  clip-path: ellipse(150% 100% at 50% 0%);
  img {
    width: 400px;
    margin: 2em auto;
    display: block;
  }
  &__title {
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    text-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
  }
}
.message {
  color: var(--text-message-color-neutral);
  text-align: center;
  font-size: 14px;
  width: 90%;
  max-width: 400px;
  margin: auto;
  line-height: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.text-started {
  font-weight: 900;
  font-size: 6em;
  margin: auto;
  width: 170px;
  position: relative;
}
`;