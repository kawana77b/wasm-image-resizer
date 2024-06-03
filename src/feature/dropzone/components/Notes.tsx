import { IMAGE_BYTES, IMAGE_FORMATS, IMAGE_SIZE } from "@/feature/image";

function mb(bytes: number) {
  return (bytes / 1024 / 1024).toFixed(0);
}

export const Notes = () => {
  const maxMB = mb(IMAGE_BYTES.max);
  const maxSize = IMAGE_SIZE.max;
  const minSize = IMAGE_SIZE.min;
  const exts = IMAGE_FORMATS.map(({ ext }) => ext)
    .flat()
    .join(", ");
  const pixels = {
    min: { width: minSize.width, height: minSize.height },
    max: { width: maxSize.width, height: maxSize.height },
  };
  const notes = [
    `File up to ${maxMB} MB are available.`,
    `Image size supported: ${pixels.min.height}x${pixels.min.height} .. ${pixels.max.width}x${pixels.max.height}`,
    `Available Formats: ${exts}`,
    `ico file conversion is experimental. If one side is more than 256 pixel wide, it will be reduced.`,
  ];
  return (
    <ul className="list-disc list-inside text-sm">
      {notes.map((note, idx) => (
        <li key={`notes-${idx}`}>{note}</li>
      ))}
    </ul>
  );
};
