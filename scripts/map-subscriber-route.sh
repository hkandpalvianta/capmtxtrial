#!/usr/bin/env bash
# Usage: ./scripts/map-subscriber-route.sh <subscriber-subdomain>
# Example: ./scripts/map-subscriber-route.sh subscriber3-hxrycd9o
#
# Maps a CF route for a new trial subscriber.
# Required because BTP trial CF does not support wildcard routes.

set -e

SUBDOMAIN="${1}"
if [ -z "$SUBDOMAIN" ]; then
  echo "Usage: $0 <subscriber-subdomain>"
  echo "Example: $0 subscriber3-hxrycd9o"
  exit 1
fi

APP_NAME="capmtxtrial-app"
BASE_HOSTNAME="0d6c044ftrial-dev-capmtxtrial-app"
DOMAIN="cfapps.us10-001.hana.ondemand.com"
HOSTNAME="${SUBDOMAIN}-${BASE_HOSTNAME}"

echo "Mapping route: ${HOSTNAME}.${DOMAIN} → ${APP_NAME}"
cf map-route "${APP_NAME}" "${DOMAIN}" --hostname "${HOSTNAME}"
echo "Done. Tenant URL: https://${HOSTNAME}.${DOMAIN}/ioviantacapmtxtrialtasks/index.html"
