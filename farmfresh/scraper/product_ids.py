import sys
import re
import json

infile = sys.argv[1]

products = re.compile(
    r'value="(.*?)" class="box" /></td><td><span id="chkProd\d+L">(.*?)</span></td>')

with open(infile, "r") as input:
    html = str(input.read())
    table = dict((v[0], v[1].strip()) for v in products.findall(html))
    print(json.dumps(table))
