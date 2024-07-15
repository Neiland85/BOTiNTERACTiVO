# Load the current requirements.txt content
requirements_content = """
numpy @ file:///private/tmp/numpy-20240206-5996-spmzje/numpy-1.26.4
openvino==2024.1.0
packaging==24.0
TBB==0.2
wheel @ file:///usr/local/Cellar/python%403.12/3.12.4/libexec/wheel-0.43.0-py3-none-any.whl#sha256=ff23205a590f2b902a2a21151019e96b93ab4a1409d7c9748b6bd210f4c0f44d
"""

# Update requirements.txt file
with open("/mnt/data/requirements.txt", "w") as file:
    file.write(requirements_content)

