import os
from PIL import Image, ImageOps

def compress_images(directory):
    for filename in os.listdir(directory):
        if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
            filepath = os.path.join(directory, filename)
            try:
                # Open image
                img = Image.open(filepath)
                
                # Apply EXIF rotation before processing
                img = ImageOps.exif_transpose(img)
                
                # Resize if it's too large (max 1920 width or height)
                max_size = (1920, 1920)
                img.thumbnail(max_size, Image.Resampling.LANCZOS)
                
                # Save with lower quality to reduce file size significantly
                img.save(filepath, format="JPEG" if filepath.lower().endswith(('.jpg', '.jpeg')) else "PNG", quality=60, optimize=True)
                
                new_size = os.path.getsize(filepath) / 1024 / 1024
                print(f"Compressed {filename} -> {new_size:.2f} MB")
            except Exception as e:
                print(f"Failed to compress {filename}: {str(e)}")

compress_images(r'C:\Users\Ravin\OneDrive\Desktop\Tesseract\tesseract-web\src\assets\gallery')
