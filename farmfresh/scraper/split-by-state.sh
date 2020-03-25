#!/bin/bash
jq -rc 'group_by(.state)[] | "\(.[0].state)\t\(.)"' ${INPUT} |
  while IFS=$'\t' read -r state content; do
    mkdir -p "${OUTPUT}/${state}"
    JSON=${OUTPUT}/${state}/markets.json
    echo "${content}" > "${JSON}"

    CSV="${OUTPUT}/${state}/markets.csv"
    jq -r '(map(keys) | add | unique) as $cols | map(. as $row | $cols | map($row[.])) as $rows | $cols, $rows[] | @csv' "${JSON}" > "${CSV}"
  done
