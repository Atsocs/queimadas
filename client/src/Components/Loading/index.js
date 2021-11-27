export default function Loading() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Carregando...</h2>
    </div>
  );
}

const styles = {
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    textAlign: "center",
    backgroundColor: "tomato"
  },
  heading: {
    position: "relative",
    top: "42%",
    margin: 0,
    fontSize: "50px",
    fontFamily: "Arial",
    color: "yellow",
  },
};
