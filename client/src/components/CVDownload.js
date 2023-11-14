

const DownloadButton = () => {
    const handleDownload = () => {
      // Replace 'your_cv.pdf' with the actual name of your CV file
      const filePath = 'client/src/assets/Daniel Farrell CV.pdf';
      const link = document.createElement('a');
      link.href = process.env.PUBLIC_URL + filePath;
      link.download = 'Daniel Farrell CV.pdf'; // Change the name if needed
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
      <div>
        <button onClick={handleDownload}>Download CV</button>
      </div>
    );
  };
  
  export default DownloadButton;