.PHONY: dev build deploy

dev:
	ng serve


build:
	npm run build


deploy: build
	npm run deploy
