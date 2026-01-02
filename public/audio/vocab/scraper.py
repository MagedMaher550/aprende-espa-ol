import os

# Get all entries in the current directory
entries = os.listdir('.')

# Filter only files
files = [f for f in entries if os.path.isfile(f)]

# Remove .mp3 extension if present
files_without_mp3 = [os.path.splitext(f)[0] for f in files]

# Write file names to a text file
with open('file_list.txt', 'w') as output_file:
    for file_name in files_without_mp3:
        output_file.write(file_name + '\n')

print("File list saved to 'file_list.txt' (without .mp3 extensions)")
