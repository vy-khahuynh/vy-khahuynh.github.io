import re, os, datetime

DIR_PATH = os.path.dirname(__file__) 
index_content = ''

with open(f'{DIR_PATH}/../index.html') as read_file:
    index_content = read_file.read()

with open(f'{DIR_PATH}/../index.html', 'w') as write_file:
    index_content = re.sub(r'(©️) [\d]{4} (Vy-Kha Huynh)', f'\\1 {datetime.date.today().year} \\2', index_content)
    write_file.write(index_content)