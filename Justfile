build:
  zola build

serve:
  zola serve

update-css:
  npx lightningcss-cli --minify --bundle --targets '>= 0.25%' style/main.css -o static/css/main.css
  npx lightningcss-cli --minify --bundle --targets '>= 0.25%' style/syntax-theme-dark.css -o static/css/syntax-theme-dark.css
  npx lightningcss-cli --minify --bundle --targets '>= 0.25%' style/syntax-theme-light.css -o static/css/syntax-theme-light.css

new-garden:
  #!/bin/bash
  title=$(gum input --placeholder "Title of the new entry")
  date=$(date -u +%Y-%m-%dT%H:%M:%SZ)
  tags=$(gum choose --no-limit "terraform" "idea" "rust" "personal" "ux" "cli" | sed "s/^/\"/;s/$/\"/" |  tr '\n' ', ')
  growth=$(gum choose --limit 1 --selected 1 "seedling" "budding" "potted")

  file_name=$(echo $title | tr '[:upper:]' '[:lower:]' | sed 's/ /_/g')
  echo 
  cat <<EOF > content/garden/${file_name}.md
  +++
  title = "${title}"
  date = "${date}"
  tags = [ ${tags} ]
  [extra]
  growth = "${growth}"
  +++
  EOF
