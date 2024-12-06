const HeaderImageUploader = ({ headerImage, setHeaderImage }) => {
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setHeaderImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    return (
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Upload Header Image</h3>
        <input
          type="file"
          className="block mb-4 text-sm text-gray-600 file:border-0 file:bg-blue-500 file:text-white file:px-4 file:py-2 file:rounded hover:file:bg-blue-600"
          onChange={handleFileChange}
        />
        {headerImage && <img src={headerImage} alt="Header" className="mt-4 w-full h-48 object-cover rounded-lg shadow-md" />}
      </div>
    );
  };
  export default HeaderImageUploader;