function Footer() {
  return (
    <div
      className="bg-primary text-center fixed-bottom d-flex align-items-center justify-content-center mt-5"
      style={{ height: "40px" }}
      id="globalShadows"
    >
      <a
        href="https://github.com/selinbastug"
        className="text-white text-decoration-none"
        id="me"
      >
        <p className="mb-0">
          selinbastug <i className="bi bi-github ms-2"></i>
        </p>
      </a>
    </div>
  );
}
export default Footer;
