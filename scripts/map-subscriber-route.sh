#!/usr/bin/env bash
# Usage: ./scripts/map-subscriber-route.sh <subscriber-subdomain>
# Example: ./scripts/map-subscriber-route.sh subscriber3-hxrycd9o
#
# Maps a CF route for a trial subscriber to capmtxtrial-app.
# Must be run after every cf deploy AND after each new subscription.
# Required because BTP trial CF does not support wildcard routes.

set -e

SUBDOMAIN="${1}"
if [ -z "$SUBDOMAIN" ]; then
  echo "Usage: $0 <subscriber-subdomain>"
  echo "Example: $0 subscriber3-hxrycd9o"
  echo ""
  echo "To map all current subscribers at once, run without arguments and"
  echo "pass each subdomain space-separated: $0 sub1-abc sub2-def sub3-ghi"
  exit 1
fi

APP_NAME="capmtxtrial-app"
BASE_HOSTNAME="0d6c044ftrial-dev-capmtxtrial-app"
DOMAIN="cfapps.us10-001.hana.ondemand.com"

for SUBDOMAIN in "$@"; do
  HOSTNAME="${SUBDOMAIN}-${BASE_HOSTNAME}"
  echo "Mapping route: ${HOSTNAME}.${DOMAIN} → ${APP_NAME}"
  cf map-route "${APP_NAME}" "${DOMAIN}" --hostname "${HOSTNAME}"
  echo "Tenant URL: https://${HOSTNAME}.${DOMAIN}/ioviantacapmtxtrialtasks/index.html"
  echo ""
done

echo "Done."
