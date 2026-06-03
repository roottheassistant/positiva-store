import pathlib
code = open("write_page.py").read()
out = open("app/page.js", "w", encoding="utf-8", newline="\n")
out.write(open("page_content.txt", encoding="utf-8").read())
out.close()
print("Done")
