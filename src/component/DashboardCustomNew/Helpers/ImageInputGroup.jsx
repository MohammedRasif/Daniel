import Input from "./Input";

export default function ImageInputGroup({ index, data, handleChange }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Input
        id={`image-${index}`}
        labelText={`Image ${index + 1}`}
        type="file"
        value={data.file}
        onChange={(e) => handleChange(index, "file", e.target.files[0])}
        className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-[#D9DDE9] file:text-gray-700 hover:cursor-pointer"
        accept="image/*"
        placeholder="Choose file"
      />
      <Input
        id={`title-${index}`}
        labelText={`Image ${index + 1} (Description)`}
        type="text"
        value={data.title}
        onChange={(e) => handleChange(index, "title", e.target.value)}
        placeholder="Enter image title"
        className="p-[14px]"
      />
    </div>
  );
}
