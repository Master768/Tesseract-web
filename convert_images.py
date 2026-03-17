import os
import io
from PIL import Image
try:
    from pillow_heif import register_heif_opener
    register_heif_opener()
except ImportError:
    pass

def convert_heic_to_jpg(input_dir, output_dir):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    for filename in os.listdir(input_dir):
        input_path = os.path.join(input_dir, filename)
        
        if filename.lower().endswith(('.heic', '.heif')):
            print(f"Converting HEIC: {filename}...")
            try:
                image = Image.open(input_path)
                output_filename = os.path.splitext(filename)[0] + '.jpg'
                output_path = os.path.join(output_dir, output_filename)
                image.save(output_path, "JPEG")
                print(f"Saved to {output_path}")
            except Exception as e:
                print(f"Failed to convert {filename}: {e}")
        elif filename.lower().endswith(('.jpg', '.jpeg', '.png')):
            # Just copy the existing supported images over
            print(f"Copying {filename}...")
            image = Image.open(input_path)
            output_path = os.path.join(output_dir, filename)
            image.save(output_path)
            print(f"Saved to {output_path}")

convert_heic_to_jpg(r'C:\Users\Ravin\OneDrive\Desktop\Tesseract\teserract photos', r'C:\Users\Ravin\OneDrive\Desktop\Tesseract\tesseract-web\src\assets\gallery')
