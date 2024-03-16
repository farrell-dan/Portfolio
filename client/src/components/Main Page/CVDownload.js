

const DownloadButton = () => {
    const handleDownload = () => {
      const filePath = '/Daniel Farrell CV.pdf';
      const link = document.createElement('a');
      link.href = process.env.PUBLIC_URL + filePath;
      link.download = 'Daniel Farrell CV.pdf'; 
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