# The @env pragma is synced (and overwritten) by running arc env
@env
testing
  REMIX_ENV development

staging
  # Add staging env vars with: arc env staging NAME value
  REMIX_ENV production

production
  # Add production env vars with: arc env production NAME value
  REMIX_ENV production