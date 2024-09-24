install:
	pnpm install

dev:
	pnpm dev --host

build:
	pnpm build

delete-last-build:
	-rm -r webapp

delete-node-modules:
	rm -r node_modules

upload:
	scp -r webapp/ IONOS_APPS:/srv/portafolios

deploy: delete-last-build build upload