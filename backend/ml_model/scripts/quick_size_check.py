import os

def check_dataset_size_correct(data_path="data/plantvillage_raw/plantvillage_dataset"):
    """Check dataset size with correct structure"""
    print(f"Checking dataset at: {data_path}")
    print("="*50)
    
    # List top-level folders
    top_folders = [f for f in os.listdir(data_path) 
                  if os.path.isdir(os.path.join(data_path, f))]
    print(f"Top folders found: {top_folders}")
    
    # We'll use the 'color' folder for our dataset
    color_path = os.path.join(data_path, "color")
    
    if not os.path.exists(color_path):
        print(f"Error: 'color' folder not found at {color_path}")
        return
    
    # Now list class folders inside color
    class_folders = [f for f in os.listdir(color_path) 
                    if os.path.isdir(os.path.join(color_path, f))]
    
    print(f"\nFound {len(class_folders)} classes in 'color' folder")
    print("First 10 classes:")
    for i, class_name in enumerate(class_folders[:10]):
        class_path = os.path.join(color_path, class_name)
        num_images = len([f for f in os.listdir(class_path) 
                         if f.lower().endswith(('.png', '.jpg', '.jpeg'))])
        print(f"  {i+1}. {class_name}: {num_images} images")
    
    # Calculate total size
    total_size = 0
    total_images = 0
    
    for class_name in class_folders:
        class_path = os.path.join(color_path, class_name)
        image_files = [f for f in os.listdir(class_path) 
                      if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
        
        for img_file in image_files:
            img_path = os.path.join(class_path, img_file)
            total_size += os.path.getsize(img_path)
        
        total_images += len(image_files)
    
    # Convert to MB/GB
    total_size_mb = total_size / (1024 * 1024)
    total_size_gb = total_size_mb / 1024
    
    print("\n" + "="*50)
    print("DATASET SUMMARY (color folder only):")
    print(f"Total classes: {len(class_folders)}")
    print(f"Total images: {total_images}")
    print(f"Total size: {total_size_mb:.2f} MB ({total_size_gb:.2f} GB)")
    
    # Check a few random folders for structure
    print("\nSample class folder structure:")
    for i in range(min(3, len(class_folders))):
        class_name = class_folders[i]
        class_path = os.path.join(color_path, class_name)
        images = [f for f in os.listdir(class_path)[:3] 
                 if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
        print(f"  {class_name}: {images[:3]} ...")

if __name__ == "__main__":
    check_dataset_size_correct()