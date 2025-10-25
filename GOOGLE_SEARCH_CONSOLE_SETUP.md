# Google Search Console Setup Guide

## Overview
This guide will help you set up Google Search Console for your EphWords blog to improve SEO and get your site indexed faster.

## Prerequisites
- Your site is deployed and accessible at https://ephwords.com
- You have access to your hosting environment variables
- You have a Google account

## Step 1: Access Google Search Console
1. Go to https://search.google.com/search-console/
2. Sign in with your Google account
3. Click **"Add Property"**

## Step 2: Add Your Property
1. Choose **"URL prefix"** (not Domain)
2. Enter: `https://ephwords.com`
3. Click **"Continue"**

## Step 3: Verify Site Ownership

### Option A: HTML Meta Tag (Recommended for this site)
Your site is already configured to support Google verification via meta tag.

1. In Google Search Console, select **"HTML tag"** verification method
2. Copy the meta tag content (the part after `content="..."`)
3. Add this as an environment variable:
   - **Key**: `PUBLIC_GOOGLE_SITE_VERIFICATION`
   - **Value**: The verification code (just the content part, not the full meta tag)

### Option B: HTML File Upload
1. Download the HTML file Google provides
2. Upload it to your `/public/` directory
3. Deploy your site
4. Click **"Verify"** in Google Search Console

## Step 4: Deploy with Environment Variable

### If using Vercel:
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add new variable:
   - Name: `PUBLIC_GOOGLE_SITE_VERIFICATION`
   - Value: Your verification code
5. Redeploy your site

### If using Netlify:
1. Go to Site settings → Environment variables
2. Add new variable:
   - Key: `PUBLIC_GOOGLE_SITE_VERIFICATION`
   - Value: Your verification code
3. Redeploy your site

### If using other hosting:
Add the environment variable in your hosting platform's dashboard and redeploy.

## Step 5: Verify in Google Search Console
1. After deploying with the environment variable
2. Go back to Google Search Console
3. Click **"Verify"**
4. You should see a success message

## Step 6: Submit Your Sitemap
Your site automatically generates a sitemap at: `https://ephwords.com/sitemap-index.xml`

1. In Google Search Console, go to **"Sitemaps"** in the left sidebar
2. Enter: `sitemap-index.xml`
3. Click **"Submit"**
4. You should see it appear in the list

## Step 7: Request Indexing (Critical for SEO improvements)
This step is especially important after making SEO changes:

1. Go to **"URL Inspection"** in the left sidebar
2. Enter your homepage URL: `https://ephwords.com`
3. Click **"Request Indexing"**
4. Repeat for key pages:
   - `https://ephwords.com/about`
   - `https://ephwords.com/posts`
   - A few recent blog posts

## Step 8: Monitor Your Site
After setup, you can:
- **Performance**: See search queries, clicks, impressions
- **Coverage**: Check which pages are indexed
- **Core Web Vitals**: Monitor site performance
- **Mobile Usability**: Ensure mobile-friendly pages

## Troubleshooting

### Verification Failed
- Double-check the environment variable is set correctly
- Ensure the site is deployed with the new variable
- Try the HTML file method as an alternative

### Sitemap Not Found
- Verify your site is accessible at https://ephwords.com
- Check that https://ephwords.com/sitemap-index.xml loads
- Ensure your hosting is working properly

### Pages Not Indexing
- Use "URL Inspection" to check specific pages
- Request indexing for important pages
- Check for any crawl errors in the Coverage report

## Expected Timeline
- **Verification**: Immediate after deployment
- **Sitemap processing**: 1-7 days
- **Indexing**: 1-2 weeks for new content
- **SEO improvements visible**: 2-4 weeks

## Next Steps After Setup
1. Monitor the Performance report for search queries
2. Check Coverage report for indexing issues
3. Use URL Inspection for specific page problems
4. Set up email notifications for critical issues

## Your Sitemap Structure
Your site generates:
- `sitemap-index.xml` - Main sitemap index
- `sitemap-0.xml` - Individual sitemap with all pages
- `robots.txt` - Points to your sitemap

## SEO Improvements Made
The following changes were made to improve your search visibility:
- Updated site-wide meta description
- Shortened problematic blog post descriptions
- Enhanced homepage content with location keywords
- Fixed typos in meta descriptions

These changes should help your homepage rank better for "Eph Bremerton" searches.
